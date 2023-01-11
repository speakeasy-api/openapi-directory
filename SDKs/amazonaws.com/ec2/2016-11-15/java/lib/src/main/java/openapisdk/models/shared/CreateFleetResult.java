package openapisdk.models.shared;



public class CreateFleetResult {
    public java.util.Map<String, Object> errors;
    public CreateFleetResult withErrors(java.util.Map<String, Object> errors) {
        this.errors = errors;
        return this;
    }
    public java.util.Map<String, Object> fleetId;
    public CreateFleetResult withFleetId(java.util.Map<String, Object> fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    public java.util.Map<String, Object> instances;
    public CreateFleetResult withInstances(java.util.Map<String, Object> instances) {
        this.instances = instances;
        return this;
    }
}