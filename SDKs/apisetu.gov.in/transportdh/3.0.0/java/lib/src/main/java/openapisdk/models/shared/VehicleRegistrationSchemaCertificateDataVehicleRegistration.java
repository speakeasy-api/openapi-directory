package openapisdk.models.shared;



public class VehicleRegistrationSchemaCertificateDataVehicleRegistration {
    public VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance insurance;
    public VehicleRegistrationSchemaCertificateDataVehicleRegistration withInsurance(VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance insurance) {
        this.insurance = insurance;
        return this;
    }
    public VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle vehicle;
    public VehicleRegistrationSchemaCertificateDataVehicleRegistration withVehicle(VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle vehicle) {
        this.vehicle = vehicle;
        return this;
    }
    public String financer;
    public VehicleRegistrationSchemaCertificateDataVehicleRegistration withFinancer(String financer) {
        this.financer = financer;
        return this;
    }
    public String normsDesc;
    public VehicleRegistrationSchemaCertificateDataVehicleRegistration withNormsDesc(String normsDesc) {
        this.normsDesc = normsDesc;
        return this;
    }
    public String statusDate;
    public VehicleRegistrationSchemaCertificateDataVehicleRegistration withStatusDate(String statusDate) {
        this.statusDate = statusDate;
        return this;
    }
}