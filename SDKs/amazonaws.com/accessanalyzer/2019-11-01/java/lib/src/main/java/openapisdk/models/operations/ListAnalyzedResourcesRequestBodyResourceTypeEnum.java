package openapisdk.models.operations;


public enum ListAnalyzedResourcesRequestBodyResourceTypeEnum {
    AWS_S3_BUCKET("AWS::S3::Bucket"),
    AWS_IAM_ROLE("AWS::IAM::Role"),
    AWS_SQS_QUEUE("AWS::SQS::Queue"),
    AWS_LAMBDA_FUNCTION("AWS::Lambda::Function"),
    AWS_LAMBDA_LAYER_VERSION("AWS::Lambda::LayerVersion"),
    AWS_KMS_KEY("AWS::KMS::Key"),
    AWS_SECRETS_MANAGER_SECRET("AWS::SecretsManager::Secret");

    public final String value;

    private ListAnalyzedResourcesRequestBodyResourceTypeEnum(String value) {
        this.value = value;
    }
}
