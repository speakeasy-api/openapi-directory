import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionTypeEnum } from "./dimensiontypeenum";
/**
 * Success
 */
export declare class UpdateDimensionResponse extends SpeakeasyBase {
    arn?: string;
    creationDate?: Date;
    lastModifiedDate?: Date;
    name?: string;
    stringValues?: string[];
    type?: DimensionTypeEnum;
}
