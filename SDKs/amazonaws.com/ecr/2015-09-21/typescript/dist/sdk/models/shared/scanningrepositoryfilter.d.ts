import { SpeakeasyBase } from "../../../internal/utils";
import { ScanningRepositoryFilterTypeEnum } from "./scanningrepositoryfiltertypeenum";
/**
 * The details of a scanning repository filter. For more information on how to use filters, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters">Using filters</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
 */
export declare class ScanningRepositoryFilter extends SpeakeasyBase {
    filter: string;
    filterType: ScanningRepositoryFilterTypeEnum;
}
