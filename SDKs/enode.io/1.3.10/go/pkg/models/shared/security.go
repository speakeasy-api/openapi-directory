package shared

type SchemeClientAccessToken struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeUserAccessToken struct {
	Authorization string `security:"name=Authorization"`
}
