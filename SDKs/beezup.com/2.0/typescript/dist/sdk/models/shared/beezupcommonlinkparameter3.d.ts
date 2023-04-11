import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonLinkParameterProperty3 } from "./beezupcommonlinkparameterproperty3";
import { BeezUPCommonLOVLink3 } from "./beezupcommonlovlink3";
import { BeezUPCommonParameterInEnum } from "./beezupcommonparameterinenum";
import { BeezUPCommonParameterTypeEnum } from "./beezupcommonparametertypeenum";
export declare class BeezUPCommonLinkParameter3 extends SpeakeasyBase {
    /**
     * description of the parameter
     */
    description?: string;
    /**
     * * path: if the parameter must be pass in the path uri
     *
     * @remarks
     * * header: if the parameter must be passed in http header
     * * query: if the parameter must be passed in querystring
     * * body: if the paramter must be passed in the body
     *
     */
    in: BeezUPCommonParameterInEnum;
    /**
     * The label corresponding to the link parameter. This label is automatically translated based on the Accept-Language http header.
     */
    label?: string;
    /**
     * Describe the way you have to follow to get access to the LOV
     */
    lovLink?: BeezUPCommonLOVLink3;
    /**
     * If true, you MUST indicate a value from the list of values otherwise it's a freetext
     */
    lovRequired?: boolean;
    /**
     * If the parameter is an object with flexible properties (additionProperties/dictionary), we will describe the properties of the object.
     */
    properties?: Record<string, BeezUPCommonLinkParameterProperty3>;
    required?: boolean;
    /**
     * schema of the parameter
     */
    schema?: string;
    /**
     * The value type of the parameter
     */
    type?: BeezUPCommonParameterTypeEnum;
    /**
     * The value of the parameter. It can be an integer a string or an object.
     */
    value?: Record<string, any>;
}
