import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListLabelsRequest extends SpeakeasyBase {
    equipment?: string;
    faultCode?: string;
    intervalEndTime?: Date;
    intervalStartTime?: Date;
    labelGroupName: string;
    maxResults?: number;
    nextToken?: string;
}
