import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class PageBuildError extends SpeakeasyBase {
    message: string;
}
/**
 * Page Build
 */
export declare class PageBuild extends SpeakeasyBase {
    commit: string;
    createdAt: Date;
    duration: number;
    error: PageBuildError;
    /**
     * Simple User
     */
    pusher: NullableSimpleUser;
    status: string;
    updatedAt: Date;
    url: string;
}
