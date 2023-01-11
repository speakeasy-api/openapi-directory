package openapisdk.models.shared;



/**
 * ListCloudFrontOriginAccessIdentitiesResult
 * The returned result of the corresponding request. 
**/
public class ListCloudFrontOriginAccessIdentitiesResult {
    public CloudFrontOriginAccessIdentityList cloudFrontOriginAccessIdentityList;
    public ListCloudFrontOriginAccessIdentitiesResult withCloudFrontOriginAccessIdentityList(CloudFrontOriginAccessIdentityList cloudFrontOriginAccessIdentityList) {
        this.cloudFrontOriginAccessIdentityList = cloudFrontOriginAccessIdentityList;
        return this;
    }
}