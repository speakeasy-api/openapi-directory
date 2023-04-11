import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationMode } from "./authenticationmode";
export declare class ModifyUserMessage extends SpeakeasyBase {
    accessString?: string;
    appendAccessString?: string;
    authenticationMode?: AuthenticationMode;
    noPasswordRequired?: boolean;
    passwords?: string[];
    userId: string;
}
