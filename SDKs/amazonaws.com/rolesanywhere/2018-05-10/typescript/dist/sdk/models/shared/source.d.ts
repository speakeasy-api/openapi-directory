import { SpeakeasyBase } from "../../../internal/utils";
import { SourceData } from "./sourcedata";
import { TrustAnchorTypeEnum } from "./trustanchortypeenum";
/**
 * The trust anchor type and its related certificate data.
 */
export declare class Source extends SpeakeasyBase {
    sourceData?: SourceData;
    sourceType?: TrustAnchorTypeEnum;
}
