import { SpeakeasyBase } from "../../../internal/utils";
import { Authority } from "./authority";
import { Place } from "./place";
export declare class Via extends SpeakeasyBase {
    authority?: Authority;
    ipAddress?: string;
    ipAddressPlace?: Place;
}
