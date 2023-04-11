import { SpeakeasyBase } from "../../../internal/utils";
import { CopyProductStatusEnum } from "./copyproductstatusenum";
/**
 * Success
 */
export declare class DescribeCopyProductStatusOutput extends SpeakeasyBase {
    copyProductStatus?: CopyProductStatusEnum;
    statusDetail?: string;
    targetProductId?: string;
}
