import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateMonitorRequest extends SpeakeasyBase {
    monitorName: string;
    resourceArn: string;
    tags?: Tag[];
}
