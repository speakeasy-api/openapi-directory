import { SpeakeasyBase } from "../../../internal/utils";
import { PredefinedResolutionEnum } from "./predefinedresolutionenum";
import { UserDefined } from "./userdefined";
/**
 * <p/>
 */
export declare class OutputResolutionStackInput extends SpeakeasyBase {
    predefined?: PredefinedResolutionEnum;
    userDefined?: UserDefined;
}
