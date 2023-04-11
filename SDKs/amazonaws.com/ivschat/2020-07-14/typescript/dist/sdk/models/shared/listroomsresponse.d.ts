import { SpeakeasyBase } from "../../../internal/utils";
import { RoomSummary } from "./roomsummary";
/**
 * Success
 */
export declare class ListRoomsResponse extends SpeakeasyBase {
    nextToken?: string;
    rooms: RoomSummary[];
}
