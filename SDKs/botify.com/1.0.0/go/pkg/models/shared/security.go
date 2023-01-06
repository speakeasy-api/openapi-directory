package shared

type SchemeDjangoRestToken struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	DjangoRestToken SchemeDjangoRestToken `security:"scheme,type=apiKey,subtype=header"`
}
