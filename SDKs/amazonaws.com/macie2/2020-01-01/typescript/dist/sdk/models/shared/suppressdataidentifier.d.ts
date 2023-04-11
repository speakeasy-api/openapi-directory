import { SpeakeasyBase } from "../../../internal/utils";
import { DataIdentifierTypeEnum } from "./dataidentifiertypeenum";
/**
 * Specifies a custom data identifier or managed data identifier that detected a type of sensitive data to start excluding or including in an S3 bucket's sensitivity score.
 */
export declare class SuppressDataIdentifier extends SpeakeasyBase {
    id?: string;
    type?: DataIdentifierTypeEnum;
}
