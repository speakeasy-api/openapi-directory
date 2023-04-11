import { SpeakeasyBase } from "../../../internal/utils";
import { Checksum } from "./checksum";
import { ModelStateEnum } from "./modelstateenum";
/**
 * <p/>
 */
export declare class Definition extends SpeakeasyBase {
    checksum?: Checksum;
    modelHandle?: string;
    s3Url?: string;
    state?: ModelStateEnum;
}
