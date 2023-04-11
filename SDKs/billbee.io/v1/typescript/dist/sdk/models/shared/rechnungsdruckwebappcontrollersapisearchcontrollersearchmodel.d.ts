import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class RechnungsdruckWebAppControllersApiSearchControllerSearchModel extends SpeakeasyBase {
    searchMode?: RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;
    term?: string;
    type?: string[];
}
