import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object defining what a not-logged-in visitor can do with the share contents
**/
export declare class AccessMode extends SpeakeasyBase {
    delete?: boolean;
    download?: boolean;
    modify?: boolean;
    upload?: boolean;
}
