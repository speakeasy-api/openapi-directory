import { SpeakeasyBase } from "../../../internal/utils";
import { LOVLink3 } from "./lovlink3";
import { ParameterTypeEnum } from "./parametertypeenum";
export declare class LinkParameterProperty3 extends SpeakeasyBase {
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
    lovLink?: LOVLink3;
    /**
     * If true, you MUST use indicate a value from the list of values otherwise it's a freetext
     */
    lovRequired?: boolean;
    /**
     * The regular expression to validate the value
     */
    pattern?: string;
    required?: boolean;
    /**
     * schema of the parameter
     */
    schema?: string;
    /**
     * The value type of the parameter
     */
    type: ParameterTypeEnum;
    /**
     * The value of the parameter. It can be an integer a string or an object.
     */
    value?: Record<string, any>;
}
