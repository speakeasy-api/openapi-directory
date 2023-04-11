import { SpeakeasyBase } from "../../../internal/utils";
import { AwsLogSourceTypeEnum } from "./awslogsourcetypeenum";
/**
 * The supported source types from which logs and events are collected in Amazon Security Lake. For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.
 */
export declare class SourceType extends SpeakeasyBase {
    awsSourceType?: AwsLogSourceTypeEnum;
    customSourceType?: string;
}
