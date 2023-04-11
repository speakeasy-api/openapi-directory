import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
/**
 * Success
 */
export declare class DeauthorizeConnectionResponse extends SpeakeasyBase {
    connectionArn?: string;
    connectionState?: ConnectionStateEnum;
    creationTime?: Date;
    lastAuthorizedTime?: Date;
    lastModifiedTime?: Date;
}
