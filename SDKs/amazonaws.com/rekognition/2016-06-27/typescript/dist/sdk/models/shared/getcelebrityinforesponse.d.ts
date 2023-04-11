import { SpeakeasyBase } from "../../../internal/utils";
import { KnownGender } from "./knowngender";
/**
 * Success
 */
export declare class GetCelebrityInfoResponse extends SpeakeasyBase {
    knownGender?: KnownGender;
    name?: string;
    urls?: string[];
}
