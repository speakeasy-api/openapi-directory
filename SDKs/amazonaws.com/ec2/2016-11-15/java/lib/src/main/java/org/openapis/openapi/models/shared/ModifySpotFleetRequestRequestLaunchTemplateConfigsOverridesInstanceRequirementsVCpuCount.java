/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount - The minimum and maximum number of vCPUs.
 */
public class ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount {
    
    public Long max;

    public ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount withMax(Long max) {
        this.max = max;
        return this;
    }
    
    
    public Long min;

    public ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount withMin(Long min) {
        this.min = min;
        return this;
    }
    
    public ModifySpotFleetRequestRequestLaunchTemplateConfigsOverridesInstanceRequirementsVCpuCount(){}
}
