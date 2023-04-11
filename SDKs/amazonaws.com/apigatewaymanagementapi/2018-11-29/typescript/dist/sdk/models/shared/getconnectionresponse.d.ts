import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConnectionResponseIdentity extends SpeakeasyBase {
    sourceIp: string;
    userAgent: string;
}
/**
 * Success
 */
export declare class GetConnectionResponse extends SpeakeasyBase {
    connectedAt?: Date;
    identity?: GetConnectionResponseIdentity;
    lastActiveAt?: Date;
}
