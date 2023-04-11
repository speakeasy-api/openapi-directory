import { SpeakeasyBase } from "../../../internal/utils";
import { LinkParameterProperty3 } from "./linkparameterproperty3";
import { LOVLink3 } from "./lovlink3";
import { ParameterInEnum } from "./parameterinenum";
export declare class LinkParameter3 extends SpeakeasyBase {
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
     * * body: if the parameter must be passed in the body
     * * file: if the parameter must be passed in a multipart/form-data (https://swagger.io/docs/specification/2-0/file-upload/)
     *
     */
    in: ParameterInEnum;
    /**
     * The label corresponding to the link parameter. This label is automatically translated based on the Accept-Language http header.
     */
    label?: string;
    /**
     * Describe the way you have to follow to get access to the LOV
     */
    lovLink?: LOVLink3;
    /**
     * If true, you MUST indicate a value from the list of values otherwise it's a freetext
     */
    lovRequired?: boolean;
    /**
     * The regular expression to validate the value
     */
    pattern?: string;
    /**
     * If the parameter is an object with flexible properties (additionProperties/dictionary), we will describe the properties of the object.
     */
    properties?: Record<string, LinkParameterProperty3>;
    required?: boolean;
    /**
     * schema of the parameter
     */
    schema?: string;
    /**
     * The value of the parameter. It can be an integer a string or an object.
     */
    value?: Record<string, any>;
}
