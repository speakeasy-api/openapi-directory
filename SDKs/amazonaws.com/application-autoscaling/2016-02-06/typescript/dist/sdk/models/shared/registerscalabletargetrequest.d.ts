import { SpeakeasyBase } from "../../../internal/utils";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
import { SuspendedState } from "./suspendedstate";
export declare class RegisterScalableTargetRequest extends SpeakeasyBase {
    maxCapacity?: number;
    minCapacity?: number;
    resourceId: string;
    roleARN?: string;
    scalableDimension: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
    suspendedState?: SuspendedState;
    tags?: Record<string, string>;
}
