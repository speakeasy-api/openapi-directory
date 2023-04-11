import { SpeakeasyBase } from "../../../internal/utils";
import { ECSServiceRecommendationFilter } from "./ecsservicerecommendationfilter";
import { ExportableECSServiceFieldEnum } from "./exportableecsservicefieldenum";
import { FileFormatEnum } from "./fileformatenum";
import { S3DestinationConfig } from "./s3destinationconfig";
export declare class ExportECSServiceRecommendationsRequest extends SpeakeasyBase {
    accountIds?: string[];
    fieldsToExport?: ExportableECSServiceFieldEnum[];
    fileFormat?: FileFormatEnum;
    filters?: ECSServiceRecommendationFilter[];
    includeMemberAccounts?: boolean;
    /**
     * <p>Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job.</p> <p>You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/create-s3-bucket-policy-for-compute-optimizer.html">Amazon S3 Bucket Policy for Compute Optimizer</a> in the <i>Compute Optimizer User Guide</i>.</p>
     */
    s3DestinationConfig: S3DestinationConfig;
}
