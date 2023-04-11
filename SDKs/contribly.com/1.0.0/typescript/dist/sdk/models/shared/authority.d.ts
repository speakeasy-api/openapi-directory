import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
import { User } from "./user";
/**
 * Token is valid
 */
export declare class Authority extends SpeakeasyBase {
    client?: Client;
    id?: string;
    user?: User;
}
