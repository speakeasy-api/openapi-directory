import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationMode } from "./authenticationmode";
import { TagList } from "./taglist";
export declare class CreateUserMessage extends SpeakeasyBase {
    accessString: string;
    authenticationMode?: AuthenticationMode;
    engine: string;
    noPasswordRequired?: boolean;
    passwords?: string[];
    tags?: TagList[];
    userId: string;
    userName: string;
}
