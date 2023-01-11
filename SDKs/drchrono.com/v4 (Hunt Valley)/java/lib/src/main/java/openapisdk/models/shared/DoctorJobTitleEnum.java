package openapisdk.models.shared;


public enum DoctorJobTitleEnum {
    UNKNOWN(""),
    PROVIDER_STAFF_PRIVATE_PRACTICE("Provider/Staff (Private Practice)"),
    PROVIDER_STAFF_HOSPITAL("Provider/Staff (Hospital)"),
    PATIENTS_INTERVIEW_CANDIDATE("Patients/Interview Candidate"),
    EDUCATOR_STUDENT("Educator/Student"),
    API_DEVELOPER("API/Developer"),
    CONSULTANT("Consultant"),
    OTHER("Other");

    public final String value;

    private DoctorJobTitleEnum(String value) {
        this.value = value;
    }
}
