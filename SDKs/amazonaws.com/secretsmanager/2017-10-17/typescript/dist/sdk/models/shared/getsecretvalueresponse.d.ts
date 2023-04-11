import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetSecretValueResponse extends SpeakeasyBase {
    arn?: string;
    createdDate?: Date;
    name?: string;
    secretBinary?: string;
    secretString?: string;
    versionId?: string;
    versionStages?: string[];
}
