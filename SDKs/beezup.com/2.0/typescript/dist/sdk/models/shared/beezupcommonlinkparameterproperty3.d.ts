import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonLOVLink3 } from "./beezupcommonlovlink3";
import { BeezUPCommonParameterTypeEnum } from "./beezupcommonparametertypeenum";
export declare class BeezUPCommonLinkParameterProperty3 extends SpeakeasyBase {
    /**
     * description of the parameter
     */
    description?: string;
    /**
     * The label corresponding to the link parameter property. This label is automatically translated based on the Accept-Language http header.
     */
    label?: string;
    /**
     * Describe the way you have to follow to get access to the LOV
     */
    lovLink?: BeezUPCommonLOVLink3;
    /**
     * If true, you MUST use indicate a value from the list of values otherwise it's a freetext
     */
    lovRequired?: boolean;
    required?: boolean;
    /**
     * schema of the parameter
     */
    schema?: string;
    /**
     * The value type of the parameter
     */
    type: BeezUPCommonParameterTypeEnum;
    /**
     * The value of the parameter. It can be an integer a string or an object.
     */
    value?: Record<string, any>;
}
