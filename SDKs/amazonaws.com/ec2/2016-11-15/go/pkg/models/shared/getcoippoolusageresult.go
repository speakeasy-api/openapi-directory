package shared

type GetCoipPoolUsageResult struct {
	CoipAddressUsages        map[string]interface{}
	CoipPoolID               map[string]interface{}
	LocalGatewayRouteTableID map[string]interface{}
}
