import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListRotationShiftsRequest extends SpeakeasyBase {
    endTime: Date;
    maxResults?: number;
    nextToken?: string;
    rotationId: string;
    startTime?: Date;
}
