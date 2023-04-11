import { SpeakeasyBase } from "../../../internal/utils";
import { LocationValue } from "./locationvalue";
export declare class Dictionaries extends SpeakeasyBase {
    aircraft?: Record<string, string>;
    carriers?: Record<string, string>;
    currencies?: Record<string, string>;
    locations?: Record<string, LocationValue>;
}
