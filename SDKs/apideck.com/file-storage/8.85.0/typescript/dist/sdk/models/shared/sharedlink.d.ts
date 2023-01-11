import { SpeakeasyBase } from "../../../internal/utils";
import { SharedLinkTarget } from "./sharedlinktarget";
export declare enum SharedLinkScopeEnum {
    Public = "public",
    Company = "company"
}
export declare class SharedLinkOutput extends SpeakeasyBase {
    createdAt?: Date;
    downloadUrl?: string;
    expiresAt?: Date;
    passwordProtected?: boolean;
    scope?: SharedLinkScopeEnum;
    target?: SharedLinkTarget;
    updatedAt?: Date;
    url?: string;
}
export declare class SharedLinkInput extends SpeakeasyBase {
    downloadUrl?: string;
    password?: string;
    scope?: SharedLinkScopeEnum;
    targetId: string;
}
