import { SpeakeasyBase } from "../../../internal/utils";
import { FormDataSourceTypeEnum } from "./formdatasourcetypeenum";
/**
 * Describes the data type configuration for the data source associated with a form.
 */
export declare class FormDataTypeConfig extends SpeakeasyBase {
    dataSourceType: FormDataSourceTypeEnum;
    dataTypeName: string;
}
