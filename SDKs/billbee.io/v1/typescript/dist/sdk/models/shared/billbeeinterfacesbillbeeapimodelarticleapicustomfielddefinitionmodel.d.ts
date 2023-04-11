import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModelTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModel extends SpeakeasyBase {
    configuration?: Record<string, any>;
    id?: number;
    isNullable?: boolean;
    name?: string;
    type?: BillbeeInterfacesBillbeeAPIModelArticleAPICustomFieldDefinitionModelTypeEnum;
}
