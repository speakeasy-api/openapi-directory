import { SpeakeasyBase } from "../../../internal/utils";
export declare class InitialValue extends SpeakeasyBase {
    /**
     * The ID of the Environment where the initial value should be set.
     */
    environmentId?: string;
    /**
     * The initial value in the given Environment. It must respect the setting type.
     */
    value?: any;
}
