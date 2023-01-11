package openapisdk.models.shared;



public class GetCoipPoolUsageResult {
    public java.util.Map<String, Object> coipAddressUsages;
    public GetCoipPoolUsageResult withCoipAddressUsages(java.util.Map<String, Object> coipAddressUsages) {
        this.coipAddressUsages = coipAddressUsages;
        return this;
    }
    public java.util.Map<String, Object> coipPoolId;
    public GetCoipPoolUsageResult withCoipPoolId(java.util.Map<String, Object> coipPoolId) {
        this.coipPoolId = coipPoolId;
        return this;
    }
    public java.util.Map<String, Object> localGatewayRouteTableId;
    public GetCoipPoolUsageResult withLocalGatewayRouteTableId(java.util.Map<String, Object> localGatewayRouteTableId) {
        this.localGatewayRouteTableId = localGatewayRouteTableId;
        return this;
    }
}