import { SpeakeasyBase } from "../../../internal/utils";
import { FlatLocalesEnum } from "./flatlocalesenum";
/**
 * User creation
**/
export declare class UserCreation extends SpeakeasyBase {
    email?: string;
    firstname?: string;
    lastname?: string;
    locale?: FlatLocalesEnum;
    password: string;
    username: string;
}
