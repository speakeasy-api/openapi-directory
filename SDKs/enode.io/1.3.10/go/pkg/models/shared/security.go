package shared

type SchemeUserAccessToken struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeClientAccessToken struct {
	Authorization string `security:"name=Authorization"`
}
