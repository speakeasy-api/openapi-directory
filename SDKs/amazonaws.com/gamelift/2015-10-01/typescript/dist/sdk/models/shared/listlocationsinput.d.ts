import { SpeakeasyBase } from "../../../internal/utils";
import { LocationFilterEnum } from "./locationfilterenum";
export declare class ListLocationsInput extends SpeakeasyBase {
    filters?: LocationFilterEnum[];
    limit?: number;
    nextToken?: string;
}
