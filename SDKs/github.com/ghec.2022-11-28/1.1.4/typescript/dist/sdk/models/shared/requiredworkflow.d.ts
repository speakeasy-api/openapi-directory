import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
/**
 * Scope of the required workflow
 */
export declare enum RequiredWorkflowScopeEnum {
    All = "all",
    Selected = "selected"
}
/**
 * State of the required workflow
 */
export declare enum RequiredWorkflowStateEnum {
    Active = "active",
    Deleted = "deleted"
}
/**
 * Response
 */
export declare class RequiredWorkflow extends SpeakeasyBase {
    createdAt: Date;
    /**
     * Unique identifier for a required workflow
     */
    id: number;
    /**
     * Name present in the workflow file
     */
    name: string;
    /**
     * Path of the workflow file
     */
    path: string;
    /**
     * Ref at which the workflow file will be selected
     */
    ref: string;
    /**
     * Minimal Repository
     */
    repository: MinimalRepository;
    /**
     * Scope of the required workflow
     */
    scope: RequiredWorkflowScopeEnum;
    selectedRepositoriesUrl?: string;
    /**
     * State of the required workflow
     */
    state: RequiredWorkflowStateEnum;
    updatedAt: Date;
}
