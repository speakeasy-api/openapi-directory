import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains a summary of a component. This is a read-only data type that is returned by <code>ListComponents</code>.
 */
export declare class ComponentSummary extends SpeakeasyBase {
    appId: string;
    componentType: string;
    environmentName: string;
    id: string;
    name: string;
}
