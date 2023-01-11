import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConnectionResponseIdentity extends SpeakeasyBase {
    sourceIp: Record<string, any>;
    userAgent: Record<string, any>;
}
export declare class GetConnectionResponse extends SpeakeasyBase {
    connectedAt?: Record<string, any>;
    identity?: GetConnectionResponseIdentity;
    lastActiveAt?: Record<string, any>;
}
