import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class ApplicationGrantApp extends SpeakeasyBase {
    clientId: string;
    name: string;
    url: string;
}
/**
 * The authorization associated with an OAuth Access.
 */
export declare class ApplicationGrant extends SpeakeasyBase {
    app: ApplicationGrantApp;
    createdAt: Date;
    id: number;
    scopes: string[];
    updatedAt: Date;
    url: string;
    /**
     * Simple User
     */
    user?: NullableSimpleUser;
}
