import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TriggerEventEnum {
    Person = "person",
    Collect = "collect",
    Document = "document"
}
export declare class Trigger extends SpeakeasyBase {
    date?: string;
    event?: TriggerEventEnum;
}
