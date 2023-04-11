import { SpeakeasyBase } from "../../../internal/utils";
import { S3ExportingConfig } from "./s3exportingconfig";
/**
 * <p>Configuration information about the S3 bucket where Identity Resolution Jobs writes result files. </p> <note> <p>You need to give Customer Profiles service principal write permission to your S3 bucket. Otherwise, you'll get an exception in the API response. For an example policy, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cross-service-confused-deputy-prevention.html#customer-profiles-cross-service">Amazon Connect Customer Profiles cross-service confused deputy prevention</a>. </p> </note>
 */
export declare class ExportingConfig extends SpeakeasyBase {
    s3Exporting?: S3ExportingConfig;
}
